// let BASE_DIR = './data';
// let BASE_DIR = 'https://raw.githubusercontent.com/mathvista/data/main';
let BASE_DIR = "static/images/myimages";

function create_number(data) {
  let question = make_qt(data.question);

  // let hint = make_hint(data.hint)
  let image = "";
  if (data.image !== -1)
    // image = make_img(`${BASE_DImetadataR}/${filters.dataset}/${data.image}`);
    image = make_img(`${BASE_DIR}/${data.image}.jpg`);
    // image = make_img(`${BASE_DIR}/1.jpg`);
    // image = make_img('https://drive.google.com/file/d/1fB9bZWKM7zOJhWs0psgLFhdVNwYJPRGm/view?usp=drive_link')

  let choices = make_choices(data.choices);

  // if data has the answer attr.
  let answer = "";
  if ("answer" in data) answer = make_answer(data.answer);

  html = make_box([question, image, choices, answer]);

  return html;
}

// creates a div with question text in it
function make_qt(question) {
  let html = `
              <p><b>Question </b></p>
              <p class="question-txt">${question}</p>
      `;

  return html;
}

function make_img(path) {
  if (path === null) return "";
  let html = `<img src="${path}" alt="number image" class="question-img" />`;
  return html;
}

function make_box(contents, cls = "") {
  if (contents.join("").length === 0) return "";
  let html = `
        <div class="${cls}"> 
            ${contents.join(" ")}
        </div>
    `;
  return html;
}

function make_choices(choices) {
  // console.log(choices);
  let temp = "";
  let len = 0;
  for (each of choices) {
    let html = make_choice(each);
    temp += html;
    len += each.length;
  }
  let html = "";
  if (len < 60)
    html = `<p class='mt-2 mb-1'><b>Choices </b></p><div class="choices">${temp}</div>`;
  else
    html = `<p class='mt-2 mb-1'><b>Choices </b></p><div class="choices-vertical">${temp}</div>`;
  return html;
}
function make_choice(choice) {
  let html = `<p class="choice-txt" style="border: 1px rgba(0, 0, 0, 0.2) solid; padding: 5px;">${choice}</p>`;
  return html;
}

function make_answer(answer) {
  let html = `<p class='mt-2 mb-1' ><b>Answer </b></p><p class="answer-txt">${answer}</p>`;
  return html;
}
