class MyPlugin {	//1
    constructor(options) {		//2
        this.options = options;
    }
    apply(compiler) {		//3
        compiler.hooks.done.tap("MyPlugin", () => {	//4
            console.log("bundling completed");
        });
        compiler.hooks.emit.tap("MyPlugin", (compilation) => {	//5
            let result = "";
            for (const filename in compilation.assets) {	//6
                if (this.options.showSize) {
                    const size = compilation.assets[filename].size();
                    result += `${filename}(${size})\n`;
                } else {
                    result += `${filename}\n`;
                }
            }
            compilation.assets["fileList.txt"] = {		//7
                source: function () {
                    return result;
                },
                size: function () {
                    return result.length;
                },
            };
        });
    }
}

module.exports = MyPlugin;
