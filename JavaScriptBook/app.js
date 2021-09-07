function getData() {

    var data = document.getElementById('name').value;

    var out = document.getElementById('dataSpan');

    var nums = data.split(' ');

    nums = nums.map(Number)

    var sum = 0;
    var product = 1;

    nums.forEach(function(num) {
        sum += num;
        product *= num
    });

    var output = 'sum is ' + sum + ' and product is ' + product;
    

    out.innerHTML = data;
}