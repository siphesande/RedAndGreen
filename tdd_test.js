// TestMyCode will be tested in here


TestMyCode.run("testing hello_world function", function(assert) {
    var result = hello_world();
    // is the result as we expected?
    assert.equals("hello world!", result,"testing hello_world function");
});


TestMyCode.run("testing helloPeople function", function(assert) {
    var result = helloPeople();
    // is the result as we expected?
    assert.equals("helloPeople", result,"testing helloPeople function");
});

TestMyCode.run("testing sphe function", function(assert) {
    var result = sphe();
    // is the result as we expected?
    assert.equals("sphe!", result,"testing sphe function");

});







