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
    this.pubCounter = 3;
	this.publicationCounter = 1;

	this.publications = [{id: 'RP-P-1', title: 'Harry Potter and the Half Blood Prince', author: 'J.J.Rowling', pages: 690, genre: 'fantasy'},
                        {id: 'RP-P-2', title: 'Alice in Wonderland', author: 'Louis Carol', pages: 300, genre: 'fantasy'},
                        {id: 'RP-P-3', title: 'Fantastic Beasts And Where thay can be found', author: 'J.J.Rowling', pages: 650, genre: 'fantasy'}];

    this.types = [{value: 'Translate'}, {value: 'Illustrate'}, {value: 'Edit'}];

	this.users = [
		{name: 'Vladyslav Sazonov', role: 'Editor'},
		{name: 'Svitlana Tyshchenko', role: 'Illustrator'},
		{name: 'Illya Tyshchenko', role: 'Translator'},
		{name: 'Alina Blahun', role: 'Author'},
		{name: 'Oksana Kurnosova', role: 'Manager'},
        {name: 'Ben Hopkins', role: 'Editor'},
        {name: 'Ivan Andrushkin', role: 'Translator'}
	];

	this.todos = [
      {id: 'RP-T-1', desc: 'This is a special task', status: 'todo', assignee: 'Vladyslav Sazonov', name: 'Make illustrations for Chapters 1-6', remaining: '1d', estimated: '5d', publication: 'Harry Potter and the Half Blood Prince', type: 'Illustrate', date: '2010-01-02'},
      {id: 'RP-T-2', desc: 'It should be done ASAP', status: 'todo', assignee: 'Anastasia Cherkashenko', name: 'Edit second part of Chapter 11', remaining: '10d', estimated: '20d', publication: 'Alice in Wonderland', type: 'Edit', date: '2012-09-03'},
      {id: 'RP-T-3', desc: 'Please do the following steps..', status: 'done', assignee: 'Svitlana Tyshchenko', name: 'Translate first Book of J.J.Rowling', remaining: '1d', estimated: '3d', publication: 'Fantastick Beasts And Where thay can be found', type: 'Translate', date: '2016-04-05'}
    ];

    this.getAuthors = function () {
        let authors = [];

        this.publications.forEach(pub => {
            if (!authors.map(a => a.name).includes(pub.author)) {
                authors.push({name: pub.author, publications: [pub.title]});
            } else {
                let index = authors.findIndex(author => author.name === pub.author);

                authors[index].publications.push(pub.title);
            }
        });

        authors.forEach(a => {
            a.publications = a.publications.join(', ');
        });

        return authors;
    }   

    this.getTodos = function (filter) {
    	if (!filter) return this.todos;
    	if (filter === 'my') {
    		return this.todos.filter((task) => task.assignee === this.currentUser.name);
    	}
    }

    this.addPub = function (pub) {
        this.pubCounter++;
        pub.id = 'RP-P-' + this.pubCounter;
        this.publications.push(pub);
        
    }

    this.addTask = function (task) {
    	this.taskCounter++;
    	task.id = 'RP-T-' + this.taskCounter;
    	task.status = "todo";
        task.date = new Date();
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