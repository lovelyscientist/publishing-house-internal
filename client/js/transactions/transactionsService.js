function TaskService() {
	this.currentUser = {
        role: 'astronaut',
        name: 'Vladyslav Sazonov',
        u_twitter: 'nerop30',
        u_agency: 'dnu',
        u_fullname: 'Vladyslav',
        u_role: 'astronaut'
    };

	this.taskCounter = 3;
	this.publicationCounter = 1;

	this.publications = [{id: 'RP-P-1', title: 'Hello, it is winter almost!'}];

	this.users = [
		{name: 'Vladyslav Sazonov', role: 'Editor'},
		{name: 'Svitlana Tyshchenko', role: 'Illustrator'},
		{name: 'Illya Tyshchenko', role: 'Translator'},
		{name: 'Alina Blahun', role: 'Author'},
		{name: 'Oksana Kurnosove',role: 'Manager'}
	];

	this.todos = [
      {id: 'RP-T-1', status: 'todo', assignee: 'Vladyslav Sazonov', name: 'Create love story for two of us', remaining: '1d', estimated: '5d', publication: 'Love story of two'},
      {id: 'RP-T-2', status: 'todo', assignee: 'Anastasuz Cherkashenko', name: 'Make us go for a walk', remaining: '10d', estimated: '20d', publication: 'Lets go for a walk'},
      {id: 'RP-T-3', status: 'done', assignee: 'Svitlana Tyshchenko', name: 'Is the best mom ever', remaining: '1d', estimated: '3d', publication: 'Hey, you are my best mom'}
    ];

    this.getTodos = function (filter) {
    	if (!filter) return this.todos;
    	if (filter === 'my') {
    		return this.todos.filter((task) => task.assignee === this.currentUser.name);
    	}
    }

    this.addTask = function (task) {
    	this.taskCounter++;
    	task.id = 'RP-T-' + this.taskCounter;
    	task.status = "todo";
    	this.todos.push(task);
    	return this.todos;
    }

    this.addPublication = function (publication) {
    	this.publicationCounter++;
    	task.id = 'RP-P' + this.publicationCounter;
    	this.publications.push(publication);
    }

    return this;
}