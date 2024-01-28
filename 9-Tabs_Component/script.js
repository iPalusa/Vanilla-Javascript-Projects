
const tabContent = document.querySelectorAll('.tab-content');

const showTab = (TabID) => {
    tabContent.forEach((tab) =>{
        tab.classList.remove('active');
    })

    document.getElementById(TabID).classList.add('active');
}