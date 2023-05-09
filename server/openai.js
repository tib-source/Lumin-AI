const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-unM2keAGuleXToCcy2TF2gEi",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// const davinci = openai.createChatCompletion({
//   model: "text-davinci-003",
//   prompt: "Generate a true or false question with the answers in a json format",
// });

// console.log(davinci.data);

const example = async () => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Hello world",
    });
    console.log(completion.data.choices[0].text);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

example();
