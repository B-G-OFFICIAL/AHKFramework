const main = document.querySelector('main');

let click_data = false;
let text_data = false;
let sleep_data = false;
let enter_data = false;
let tab_data = false;
let up_data = false;
let right_data = false;
let down_data = false;
let left_data = false;
let space_data = false;
let window_data = false;
let control_data = false;
let control_shift_data = false;
let control_tab_data = false;
let shift_data = false;
let alter_data = false;
let alter_tab_data = false;
let scrollup_data = false;
let scrolldown_data = false;

function clearMain() {
  main.innerHTML = '';
  click_data = false;
  text_data = false;
  sleep_data = false;
  enter_data = false;
  tab_data = false;
  up_data = false;
  right_data = false;
  down_data = false;
  left_data = false;
  space_data = false;
  window_data = false;
  control_data = false;
  control_shift_data = false;
  control_tab_data = false;
  shift_data = false;
  alter_data = false;
  alter_tab_data = false;
  scrollup_data = false;
  scrolldown_data = false;
}


const succes_message = (msg) => {
    const succesDiv = document.getElementById('succesmsg_div');
    const errorDiv = document.getElementById('errormsg_div');
    if (succesDiv) {
        succesDiv.remove();
    }
    if (errorDiv) {
        errorDiv.remove();
    }

    if(msg == null){
        msg = 'AHK';
    }

    const succesmsg_div = document.createElement('div');
    succesmsg_div.id = 'succesmsg_div';
    succesmsg_div.classList.add('success');
    succesmsg_div.classList.add('pop-up');

    const succesin_div_1 = document.createElement('div');
    succesin_div_1.classList.add('success-text');
    succesin_div_1.innerText = msg;

    const succesin_div_2 = document.createElement('div');
    succesin_div_2.id = 'close_suc_msg';
    succesin_div_2.classList.add('success-icon');
    succesin_div_2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;

    main.appendChild(succesmsg_div);
    succesmsg_div.appendChild(succesin_div_1);
    succesmsg_div.appendChild(succesin_div_2);

    const close_suc_msg = document.getElementById('close_suc_msg');
    if (close_suc_msg) {
        close_suc_msg.addEventListener('click', () => {
            succesmsg_div.style.opacity = '0';
        });
    }
    setTimeout(() => {
        succesmsg_div.style.opacity = '0';
    }, 4000);
}

const error_message = (msg) => {
    const succesDiv = document.getElementById('succesmsg_div');
    const errorDiv = document.getElementById('errormsg_div');
    if (succesDiv) {
        succesDiv.remove();
    }
    if (errorDiv) {
        errorDiv.remove();
    }

    if(msg == null){
        msg = 'AHK';
    }
    const errormsg_div = document.createElement('div');
    errormsg_div.id = 'errormsg_div';
    errormsg_div.classList.add('pop-up');
    errormsg_div.classList.add('error');

    const error_div_1 = document.createElement('div');
    error_div_1.classList.add('error-text');
    error_div_1.innerText = msg;

    const error_div_2 = document.createElement('div');
    error_div_2.id = 'close_err_msg';
    error_div_2.classList.add('error-icon');
    error_div_2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;

    main.appendChild(errormsg_div);
    errormsg_div.appendChild(error_div_1);
    errormsg_div.appendChild(error_div_2);

    const close_err_msg = document.getElementById('close_err_msg');
    if (close_err_msg) {
        close_err_msg.addEventListener('click', () => {
            errormsg_div.style.opacity = '0';
        });
    }
    setTimeout(() => {
        errormsg_div.style.opacity = '0';
    }, 4000);
}

let mainDiv = (class1, class2) => {
  clearMain();
  let maindiv = document.createElement('div');
    maindiv.classList.add(class1);
    maindiv.classList.add(class2);
    return maindiv;
}
let Boxheading = (text) => {
  let headingbox = document.createElement('h2');
    headingbox.innerText = text;
    return headingbox;
}
let BoxLable = (text) => {
  let lebelbox = document.createElement('label');
    lebelbox.innerHTML = text;
    return lebelbox;
}
let inputText = (className, placeHolder) => {
  let inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.classList.add(className);
    inputBox.placeholder = placeHolder;
    return inputBox;
}
let inputNumber = (className, placeHolder, maxLength) => {
  let inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.classList.add(className);
    inputBox.placeholder = placeHolder;
    inputBox.maxLength = maxLength;
    inputBox.oninput = function() {this.value = this.value.replace(/[^0-9]/g, '')};
    return inputBox;
}
let sleepBox = () => {
  let inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.classList.add('click_sleep');
    inputBox.value = '1000';
    inputBox.placeholder = 'Sleep Time';
    inputBox.oninput = function() {this.value = this.value.replace(/[^0-9]/g, '')};
    return inputBox;
}
let submitBtn = () => {
  let submitButton = document.createElement('button');
    submitButton.innerHTML = 'Add in Script';
    submitButton.value = 'text';
    submitButton.classList.add('add_data_btn');
    return submitButton;
}
// let smallBtn = (className, Text) => {
//     let smallBtn = document.createElement('button');
//     smallBtn.classList.add(className);
//     smallBtn.innerHTML = Text;
//     return smallBtn;
// }
let sendData = ( AddDataAHK ) => {
  fetch('/AddScript', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ AddDataAHK }),
  })
    .then(response => response.text())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}
/*------------------------------------------Click Function-------------------------------------------------*/
const func_click = () => {

    if (!click_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Click Functionality");
        const inputBox1 = inputNumber('x-cordinater', 'x-cordinater', 4);
        const inputBox2 = inputNumber('y-cordinater', 'y-cordinater', 4);
        const inputBox3 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(inputBox2);
        newDiv.appendChild(inputBox3);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        click_data = true;

        adddata.addEventListener('click', function() {
            if(inputBox1.value && inputBox2.value){
            const AddDataAHK = `\nCoordMode, Mouse, Screen\nClick, ${inputBox1.value} ${inputBox2.value}\nSleep, ${inputBox3.value}\n`;

            inputBox1.value = '';
            inputBox2.value = '';

            succes_message('Screen Script Added');
            sendData(AddDataAHK);
            }
            else{
                error_message('screen script not added');
            }
        });
    }
}
/*------------------------------------------Send Text Function---------------------------------------------*/
const func_text = () => {
    if (!text_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Text Functionality");
        const inputBox1 = inputText('text', 'Enter Text');
        const inputBox2 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(inputBox2);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        text_data = true;

        adddata.addEventListener('click', function() {
            if(inputBox1.value){
            const AddDataAHK = `\nSend, ${inputBox1.value}\nSleep, ${inputBox2.value}\n`;

            inputBox1.value = '';

            succes_message('Text added in Script');
            sendData(AddDataAHK);
            }
            else{
                error_message('text not added');
            }
        });
    }
}
/*------------------------------------------Sleep Function---------------------------------------------*/
const func_sleep = () => {
    if (!sleep_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Sleep Functionality");
        const inputBox1 = inputNumber("text", "Enter Extra Sleep Time", 10)
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        sleep_data = true;
        
        adddata.addEventListener('click', function() {
            if(inputBox1.value){
            const AddDataAHK = `\nSleep, ${inputBox1.value}\n`;

            inputBox1.value = '';

            succes_message('extra sleep time added');
            sendData(AddDataAHK);
            }
            else{
                error_message('extra sleep time not added');
            }
        });
    }
}
/*------------------------------------------Enter Function---------------------------------------------*/
const func_enter = () => {
    if (!enter_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Enter Functionality");
        const inputBox1 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        enter_data = true;

        adddata.addEventListener('click', function() {
            const AddDataAHK = `\nSend, {Enter}\nSleep, ${inputBox1.value}\n`;

            succes_message('enter key');
            sendData(AddDataAHK);
        });
    }
}
/*------------------------------------------Tab Function---------------------------------------------*/
const func_tab = () => {
    if (!tab_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Tab Functionality");
        const inputBox1 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        tab_data = true;

        adddata.addEventListener('click', function() {
            const AddDataAHK = `\nSend, {Tab}\nSleep, ${inputBox1.value}\n`;

            succes_message('tab key');
            sendData(AddDataAHK);
        });
    }
}
/*------------------------------------------Up Key Function---------------------------------------------*/
const func_up = () => {
    if (!up_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Up Key Functionality");
        const inputBox1 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        up_data = true;

        adddata.addEventListener('click', function() {
            const AddDataAHK = `\nSend, {Up}\nSleep, ${inputBox1.value}\n`;

            succes_message('up key');
            sendData(AddDataAHK);
        });
    }
}
/*------------------------------------------Right Key Function---------------------------------------------*/
const func_right = () => {
    if (!right_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Right Key Functionality");
        const inputBox1 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        right_data = true;

        adddata.addEventListener('click', function() {
            const AddDataAHK = `\nSend, {Right}\nSleep, ${inputBox1.value}\n`;

            succes_message('right key');
            sendData(AddDataAHK);
        });
    }
}
/*------------------------------------------Down Key Function---------------------------------------------*/
const func_down = () => {
    if (!down_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Down Key Functionality");
        const inputBox1 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        down_data = true;

        adddata.addEventListener('click', function() {
            const AddDataAHK = `\nSend, {Down}\nSleep, ${inputBox1.value}\n`;

            succes_message('down key');
            sendData(AddDataAHK);
        });
    }
}
/*------------------------------------------Left Key Function---------------------------------------------*/
const func_left = () => {
    if (!left_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Left Key Functionality");
        const inputBox1 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        left_data = true;

        adddata.addEventListener('click', function() {
            const AddDataAHK = `\nSend, {Left}\nSleep, ${inputBox1.value}\n`;

            succes_message('left key');
            sendData(AddDataAHK);
        });
    }
}
/*------------------------------------------Space Key Function---------------------------------------------*/
const func_space = () => {
    if (!space_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Space Key Functionality");
        const label1 = BoxLable('After Space add time');
        const inputBox1 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        space_data = true;

        adddata.addEventListener('click', function() {
            const AddDataAHK = `\nSend, {Space}\nSleep, ${inputBox1.value}\n`;

            succes_message('Space button');
            sendData(AddDataAHK);
        });
    }
}
/*------------------------------------------Window Key Function---------------------------------------------*/
const func_window = () => {
    if (!window_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Window Key Functionality");
        const label1 = BoxLable('After Window add time');
        const inputBox1 = inputText('text', 'Which key with Shift');
        inputBox1.maxLength = 1;
        const inputBox2 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(inputBox2);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        window_data = true;
        
        adddata.addEventListener('click', function() {
            if(inputBox1.value){
                const AddDataAHK = `\nSend, #${inputBox1.value}\nSleep, ${inputBox2.value}\n`;
                sendData(AddDataAHK);

                succes_message(`window ${inputBox1.value} key added`);
                inputBox1.value = '';
            }
            else{
                error_message('widow key not added');
            }
            
        });
    }
}
/*------------------------------------------Control Key Function---------------------------------------------*/
const func_control = () => {
    if (!control_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Control Key Functionality");
        const label1 = BoxLable('After Control add time');
        const inputBox1 = inputText('text', 'Which key with Control');
        inputBox1.maxLength = 1;
        const inputBox2 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(inputBox2);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        control_data = true;

        adddata.addEventListener('click', function() {
            if(inputBox1.value){
                const AddDataAHK = `\nSend, ^${inputBox1.value}\nSleep, ${inputBox2.value}\n`;
                sendData(AddDataAHK);

                succes_message(`control ${inputBox1.value} key added`);
                inputBox1.value = '';
            }
            else{
                error_message('Control key not added');
            }
            
        });
    }
}
/*----------------------------------------control Shift Key Function-----------------------------------------*/
const func_control_shift = () => {
    if (!control_shift_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Control Shift Key Functionality");
        const label1 = BoxLable('After Control Shift add time');
        const inputBox1 = inputText('text', 'Which key with Control Shift');
        inputBox1.maxLength = 1;
        const inputBox2 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(inputBox2);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        control_shift_data = true;

        adddata.addEventListener('click', function() {
            if(inputBox1.value){
                const AddDataAHK = `\nSend, ^+${inputBox1.value}\nSleep, ${inputBox2.value}\n`;
                sendData(AddDataAHK);

                succes_message(`control Shift ${inputBox1.value} key added`);
                inputBox1.value = '';
            }
            else{
                error_message('Control Shift key not added');
            }
            
        });
    }
}
/*----------------------------------------control tab Key Function-----------------------------------------*/
const func_control_tab = () => {
    if (!control_tab_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Control Tab Key Functionality");
        const label1 = BoxLable('After control tab add time');
        const inputBox1 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        control_tab_data = true;

        adddata.addEventListener('click', function() {
            const AddDataAHK = `\nSend, ^{Tab}\nSleep, ${inputBox1.value}\n`;

            succes_message('Contol Tab button Added');
            sendData(AddDataAHK);
        });
    }
}
/*------------------------------------------Shift Key Function---------------------------------------------*/
const func_shift = () => {
    if (!shift_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Shift Key Functionality");
        const label1 = BoxLable('After Shift add time');
        const inputBox1 = inputText('text', 'Which key with Control');
        inputBox1.maxLength = 1;
        const inputBox2 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(inputBox2);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        shift_data = true;

        adddata.addEventListener('click', function() {
            if(inputBox1.value){
                const AddDataAHK = `\nSend, +${inputBox1.value}\nSleep, ${inputBox2.value}\n`;
                sendData(AddDataAHK);

                succes_message(`shift ${inputBox1.value} key added`);
                inputBox1.value = '';
            }
            else{
                error_message('shift key not added');
            }
        });
    }
}
/*------------------------------------------Alter Key Function---------------------------------------------*/
const func_alter = () => {
    if (!alter_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Alter Key Functionality");
        const label1 = BoxLable('After Alter add time');
        const inputBox1 = inputText('text', 'Which key with Control');
        inputBox1.maxLength = 1;
        const inputBox2 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(inputBox2);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        alter_data = true;

        adddata.addEventListener('click', function() {
            if(inputBox1.value){
                const AddDataAHK = `\nSend, !${inputBox1.value}\nSleep, ${inputBox2.value}\n`;
                sendData(AddDataAHK);

                succes_message(`Alter ${inputBox1.value} key added`);
                inputBox1.value = '';
            }
            else{
                error_message('Alter key not added');
            }
        });
    }
}
/*----------------------------------------control alter Key Function-----------------------------------------*/
const func_alter_tab = () => {
    if (!alter_tab_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Alter Tab Key Functionality");
        const label1 = BoxLable('After alter tab add time');
        const inputBox1 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        alter_tab_data = true;

        adddata.addEventListener('click', function() {
            const AddDataAHK = `\nSend, !{Tab}\nSleep, ${inputBox1.value}\n`;

            succes_message('Alter Tab button Added');
            sendData(AddDataAHK);
        });
    }
}
/*------------------------------------------Scroll Up Function---------------------------------------------*/
const func_scrollup = () => {
    if (!scrollup_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Scroll Up Functionality");
        const label1 = BoxLable('Add Number for scrolling');
        const inputBox1 = inputNumber('text', 'How many number Scroll', 5);
        const inputBox2 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(inputBox2);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        scrollup_data = true;

        adddata.addEventListener('click', function() {
            if(inputBox1.value){
            const AddDataAHK = `\nSend, {ScrollUp ${inputBox1.value}}\nSleep, ${inputBox2.value}\n`;

            inputBox1.value = '';

            succes_message('scrolling up added');
            sendData(AddDataAHK);
            }
            else{
                error_message('scrolling up not added');
            }
        });
    }
}
/*------------------------------------------Scroll Down Function---------------------------------------------*/
const func_scrolldown = () => {
    if (!scrolldown_data) {
        const newDiv = mainDiv('click_data', 'main_box' )
        const heading = Boxheading("Scroll Down Functionality");
        const label1 = BoxLable('Add Number for scrolling');
        const inputBox1 = inputNumber('text', 'How many number Scroll', 5);
        const inputBox2 = sleepBox();
        const adddata = submitBtn();

        newDiv.appendChild(heading);
        newDiv.appendChild(label1);
        newDiv.appendChild(inputBox1);
        newDiv.appendChild(inputBox2);
        newDiv.appendChild(adddata);
        main.appendChild(newDiv);
        scrolldown_data = true;

        adddata.addEventListener('click', function() {
            if(inputBox1.value){
            const AddDataAHK = `\nSend, {ScrollDown ${inputBox1.value}}\nSleep, ${inputBox2.value}\n`;

            inputBox1.value = '';

            succes_message('scrolling down');
            sendData(AddDataAHK);
            }
            else{
                error_message('scrolling down not added');
            }
        });
    }
}



// #Persistent
// SetTimer, ShowMouseCoordinates, 100
// return

// ShowMouseCoordinates:
// MouseGetPos, MouseX, MouseY
// ToolTip, X:%MouseX%`nY:%MouseY%
// return