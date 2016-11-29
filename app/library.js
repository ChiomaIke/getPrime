module.exports = {
getPrimes: function(n) {
    var sieve = [], i, j;
	var primes = [];
    for (i = 0; i <= n; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= n; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
};


 