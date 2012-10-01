
var Bindings = require("..");

describe("bindings", function () {
    describe("dependent properties", function () {
        describe("string", function () {
            it("should propagate related bindings", function () {

                var object = Bindings.create(null, {
                    foo: 10,
                    bar: 20
                }, {
                    baz: {
                        dependencies: "(foo, bar)",
                        get: function () {
                            return this.foo + this.bar;
                        }
                    },
                    qux: {
                        "<-": "baz"
                    }
                });

                expect(object.qux).toEqual(30);

                object.bar = 30;
                expect(object.qux).toEqual(40);

            });
        });

        describe("array", function () {

            it("should propagate related bindings", function () {

                var object = Bindings.create(null, {
                    foo: 10,
                    bar: 20
                }, {
                    baz: {
                        dependencies: ["foo", "bar"],
                        get: function () {
                            return this.foo + this.bar;
                        }
                    },
                    qux: {
                        "<-": "baz"
                    }
                });

                expect(object.qux).toEqual(30);

                object.bar = 30;
                expect(object.qux).toEqual(40);

            });

        });

    });

});
