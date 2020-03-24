function cartesianProduct(v1, v2) {
	var p = [];
	for (var j in v2) {
		for (var i in v1) {
			p.push(v2[j] * v1[i]);
		}
	}
	return p;
}

function calculateDivisors(number) {
	var n = number;
	var divisors = [1];

	if (n % 2 === 0) {
		var two_factors = [2];
		n /= 2;
		while (n % 2 === 0) {
			two_factors.push(two_factors[two_factors.length-1] * 2);
			n /= 2;
		}
		divisors = divisors.concat(two_factors);
	}

	var i = 3;
	while (n !== 1) {
		if (n % i === 0) {
			var factors = [i];
			n /= i;
			while (n % i === 0) {
				factors.push(factors[factors.length-1] * i);
				n /= i;
			}
			divisors = divisors.concat(cartesianProduct(divisors, factors));
		}
		i += 2;
	}
	divisors.sort((a,b) => a - b);
	return divisors;
}

module.exports = calculateDivisors;
