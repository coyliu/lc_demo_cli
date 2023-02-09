const inquirer = require("inquirer");
async function chooseTemplate() {
  const promptList = [
    {
      type: "list", //type决定交互的方式，input输入，list单选，checkbox多选
      name: "template",
      message: "选择一个需要创建的模版",
      choices: [
        {
          name: "vue-default1",
          value: "vue-template-default",
        },
        {
          name: "vue-default2",
          value: "vue-template-default-2",
        },
      ],
    },
  ];
  console.log('promptList :>> ', promptList);
  const answers = await inquirer.prompt(promptList); //执行命令行交互，并将交互的结果返回
  const { template } = answers;
  return template;
}
module.exports = {
  chooseTemplate
};
