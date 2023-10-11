import express, { Express, Request, Response } from 'express';
require('dotenv/config');

const path = require('path');
const fs = require('fs');
const child_process = require('child_process');

const { ethers } = require('ethers');

// console.log("Root path: ", __dirname);

const rootPath = path.join(__dirname, '../../');

const sourcePath = path.join(rootPath, 'packages/app/server-driven');

console.log("Source path: ", sourcePath);

const serveTranspiledFile = (wallet: any) => async (req: Request, res: Response, next: any) => {
	try {
		const { params } = req;
		const { wormhole } = params;
		// const file = path.resolve(sourcePath, wormhole);
		const file = path.resolve(`${sourcePath}`, wormhole);
		if (!fs.existsSync(file)) {
			throw new Error(`Transpile Pre: Unable to find ${file}`);
		}
		const src = child_process.execSync(
			// `npx babel --presets=@babel/preset-env,@babel/preset-react ${wormhole}`,
			`npx babel --presets=@babel/preset-env,@babel/preset-react ${sourcePath}/${wormhole}`,
			// `cat ${sourcePath}-compiled/${wormhole}`,
			{ cwd: `${sourcePath}` },
		).toString();

		console.log("Source: ", src);
		// const signature = await wallet.signMessage(src);
		return res
			.status(200)
		// .set({ 'X-Csrf-Token': signature })
		.send(src);
	} catch (e) {
		return next(e);
	}
};

(async () => {
	const { PORT, SIGNER_MNEMONIC } = process.env;
	// const wallet = await ethers.Wallet.fromMnemonic(SIGNER_MNEMONIC);
	const wallet = ""
	await new Promise(
		resolve => express()
			.get('/:wormhole', serveTranspiledFile(wallet))
			// @ts-ignore
			.listen(PORT, resolve),
	);
	console.clear();
	console.log(`🕳️ 🐛 Wormholes are being served!`);
	console.log('Note, request latency will be increased since files will be lazily recompiled on every request.');
	console.log(`Port: ${PORT}`);
})();
