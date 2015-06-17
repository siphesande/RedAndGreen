// TestMyCode will be tested in here


TestMyCode.run("testing hello_world function", function(assert) {
    var result = hello_world();
    // is the result as we expected?
    assert.equals("hello world!", result, "testing hello_world function");
});

