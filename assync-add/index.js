async function asyncAdd(...args) {
	let sum = 0
	for (const num of args) {
		sum += num
	}
	return sum
}

function measureTime(func, args) {
	const start = performance.now()
	const result = func(...args).then(result => {
		const end = performance.now()
		const timeElapsed = end - start
		console.log(`Time elapsed: ${timeElapsed.toFixed(2)} ms`)
		console.log(`Number of async operations: ${args.length}`)
		console.log(`Result: ${result}`)
	})
}

async function addNumbers(...nums) {
	const promises = []
	for (let i = 0; i < nums.length; i += 100) {
		promises.push(asyncAdd(...nums.slice(i, i + 100)))
	}
	const results = await Promise.all(promises)
	return results.reduce((acc, cur) => acc + cur, 0)
}

const nums = Array.from({ length: 10000 }, () =>
	Math.floor(Math.random() * 100)
)

measureTime(addNumbers, nums)
