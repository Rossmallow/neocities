// Below is from https://youtu.be/ZEcoC6jnxgg
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
      const button_class = event.target.classList;
      event.preventDefault();

      if (button_class[1] == 'show-more') {
        this.removeClass(content, 'shrunk');
        this.addClass(content, 'expanded');
        this.removeClass(button, 'show-more');
        this.addClass(button, 'show-less');
      } else {
        this.removeClass(content, 'expanded');
        this.addClass(content, 'shrunk');
        this.removeClass(button, 'show-less');
        this.addClass(button, 'show-more');
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
