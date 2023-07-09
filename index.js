

var positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];
var names = [];


function getNames() {
    for (var i = 0; i < positions.length; i++) {
      var name = prompt( `Ведіть ім'я для ${positions[i]}`);
      names.push(name);
    }
};
var workers = [];
  
function createTeam() {
    for (var i = 0; i < names.length; i++) {
      var position = positions[i];
      var name = names[i];
      var salary;
  
        if (position.toLowerCase().indexOf("junior") !== -1) {
            salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
        } else if (position.toLowerCase().indexOf("middle") !== -1) {
            salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        } else if (position.toLowerCase().indexOf("senior") !== -1) {
            salary = Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500;
        } else {
            salary = Math.floor(Math.random() * (4500 - 4000 + 1)) + 4000;
        }
  
            var team = {
                name: name,
                position: position,
                salary: salary,
                    tellAboutYourSelf: function() {
                     console.log(`Моє ім'я  ${this.name}  і я -  ${this.position }. Я заробляю  ${this.salary}  $.`);
                    }
            };
  
      workers.push(team);
    }
};


  
function showTeam() {
    for (var i = 0; i < workers.length; i++) {
      var team = workers[i];
      console.log(`${team.name}  - ${team.position}. Зарплата : ${team.salary} $.`);
    }
};

  
  getNames();
  createTeam();
  showTeam();
 

