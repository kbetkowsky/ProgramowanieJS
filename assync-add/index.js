async function asyncAdd(...args) {
	let sum = 0
	for (const num of args) {
		sum += num
	}
	return sum
}

async function measureTime() {
	const start = performance.now()
	const nums = Array.from({ length: 100 }, () =>
		Math.floor(Math.random() * 100)
	)
	const result = await asyncAdd(...nums)

	const end = performance.now()
	const timeElapsed = end - start

	console.log(`Time elapsed: ${timeElapsed.toFixed(2)} ms`)
	console.log(`Number of async operations: ${nums.length}`)
	console.log(`Result: ${result}`)
}

measureTime()
