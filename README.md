# django-edremark

edRemark is a narrative comment generator for independent school teachers. It is a full CRUD app coded in Python, Django, Bootstrap and JavaScript, with user authentication.

The core model of the app is the comment option, which includes a value for the category of student evaluation (such as Preparation), whether for this student the category is a Strength or a Weakness, and the text that would actually be filled in (for example, so and so 'always comes to class prepared').

All users fill out a single form with information about the student (like name, class, pronouns, etc.) and up to two each of Strengths, Weaknesses and Recommendations for improvement. Upon submission a JavaScript script takes the input and puts together a narrative comment that can be copy pasted into a gradebook. The comment options pull from the Django SQLite database.

Guest users have access to a set of default comment options pre-built into the app, while logged in users have full CRUD capability and can see a list of their own comment options together with the default ones. When they use the comment generator, they can draw from either set. Only they can see their own user-generated comment options.
