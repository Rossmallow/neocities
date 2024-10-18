// Below is from https://youtu.be/ZEcoC6jnxgg?si=e0g4-EwrzO9JF1vo
//    https://codepen.io/webcrunchblog/pen/yGorNE
const Utils = {
  
  addClass: function(element, class_name) {
    element.classList.add(class_name);
  },
  
  removeClass: function(element, class_name) {
    element.classList.remove(class_name);
  },
  
  expand: function(button, content) {
    button.addEventListener('click', event => {
      const button_text = event.target.textContent;
      event.preventDefault();
      
      console.log(this);
      if (button_text == 'show more') {
        this.removeClass(content, 'shrunk');
        this.addClass(content, 'expanded');
        button.textContent = 'show less';
      } else {
        this.removeClass(content, 'expanded');
        this.addClass(content, 'shrunk');
        button.textContent = 'show more';
      }
    });
  } 
};

const FindContent = {
  expandable: function(button_class) {
   const expand_buttons = document.querySelectorAll(button_class);
    
   expand_buttons.forEach(function(button) {
     const content = button.previousElementSibling;
     Utils.expand(button, content);
   });
  }
};
 
FindContent.expandable('.expand-toggle');
