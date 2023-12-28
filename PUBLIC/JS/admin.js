const profile_btn1 = document.getElementById('profile_btn1'),
    profile_btn2 = document.getElementById('profile_btn2'),
    admin_btn = document.getElementById('admin_btn'),
    message_btn = document.getElementById('message_btn');
    
const profile_data = document.getElementById('profile_data'),
    admin_data = document.getElementById('admin_data'),
    message_data = document.getElementById('message_data');

const HideAdmin = () => {
    profile_data.style.display = 'none';
    admin_data.style.display = 'none';
    message_data.style.display = 'none';
}

profile_btn1.addEventListener('click', () => {
    HideAdmin();
    profile_data.style.display = 'block';
});
profile_btn2.addEventListener('click', () => {
    HideAdmin();
    profile_data.style.display = 'block';
});
admin_btn.addEventListener('click', () => {
    HideAdmin();
    admin_data.style.display = 'block';
});
message_btn.addEventListener('click', () => {
    HideAdmin();
    message_data.style.display = 'block';
});
// ========================= end js for open menus from sidebar

const inputfile = document.getElementById('inputfile'),
    inputfileicon =document.getElementById('inputfileicon');

inputfileicon.addEventListener('click', () => {
    inputfile.click();
});

// ========================= end js for click on file
const edit_profile_div = document.getElementById('edit_profile_data');

const changenameicon = document.getElementById('changenameicon'),
    changeemailicon = document.getElementById('changeemailicon'),
    changephoneicon = document.getElementById('changephoneicon'),
    changepasswordicon = document.getElementById('changepasswordicon');

const changenamebox = document.getElementById('changenamebox'),
    changeemailbox = document.getElementById('changeemailbox'),
    changephonebox = document.getElementById('changephonebox'),
    changepasswordbox = document.getElementById('changepasswordbox');

changenameicon.addEventListener('click', () => {
    changenamebox.removeAttribute('readonly');
    changenamebox.focus();
});

changephoneicon.addEventListener('click', () => {
    changephonebox.removeAttribute('readonly');
    changephonebox.focus();
});

changeemailicon.addEventListener('click', () => {
    changeemailbox.removeAttribute('readonly');
    changeemailbox.focus();
});

changepasswordicon.addEventListener('click', () => {
    changepasswordbox.removeAttribute('readonly');
    changepasswordbox.focus();
    changepasswordbox.type = 'text';
});