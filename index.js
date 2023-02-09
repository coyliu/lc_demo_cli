#! /usr/bin/env node
const { program } = require("commander"); // 引入
// const { chooseTemplate } = require("./inquirers.js");
function start() {
  console.log("你好,靓仔");
  program.version(require("./package.json").version); // 输出版对应的版本号

  program
    .command("create <projectName>")
    .description("用于创建一个项目模板")
    .option("-T, --template [template]", "输入使用的模板名字")
    .action(async function (projectName, options) {
      let template = options.template;
      projectName = projectName || "untitled";
      //   if (!template) {
      //     template = await chooseTemplate();
      //   }
    //   console.log("chooseTemplate :>> ", chooseTemplate);
      console.log(`成功创建项目：${projectName}`);
      console.log(`所使用的模板：${template}`);
    });
  program
    .command("checkAll")
    .description("查看所有的模板")
    .action(function () {
      const templateList = ["vue-default-template", "vue-default-template-ts"];
      templateList.forEach((temp, index) => {
        console.log(`(${index + 1})  ${temp}`);
      });
    });
  program.parse(process.argv);
}

start();
