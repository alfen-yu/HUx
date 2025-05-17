class GPACalculator():
    def __init__(self, courses):
        self.courses = courses
        self.total_quality_points = 0
        self.total_credits = 0
        self.cgpa = 0

    scale = {"A+": 4.00, "A": 4.00, "A-": 3.67, "B+": 3.33, "B": 3.00,
             "B-": 2.67, "C+": 2.33, "C": 2.00, "C-": 1.67, "F": 0.00}

    def calculate_total_credits(self):
        for course in self.courses:
            self.total_credits += course[2]

        return self.total_credits

    def calculate_total_quality_points(self):
        for course in self.courses:
            grade_letter = course[1]
            if grade_letter in self.scale:
                self.total_quality_points += self.scale[grade_letter] * course[2]

        return self.total_quality_points

    def calculate_cgpa(self):
        self.total_quality_points = self.calculate_total_quality_points()
        self.total_credits = self.calculate_total_credits()
        self.cgpa = self.total_quality_points / self.total_credits
        return self.cgpa


# List of Courses
# courses that i have taken 

courses = []

# courses = [("Engineering Workshop", "A-", 1),
#            ("Discrete Mathematics", "C-", 3),
#            ("What is Modernity?", "B-", 4),
#            ("Understanding the Human Body", "B", 3),
#            ("Digital Logic and Design Lab", "B-", 1),
#            ("Digital Login and Design", "C-", 3),
#            ("Electric Circutis", "F", 2),
#            ("Intro to ECE", "B-", 2),
#            ("Data Structures & Algo", "B", 4),
#            ("Pakistan and Modern South Asia", "B+", 4),
#            ("Jehan-e-Urdu", "A", 4),
#            ("OOP & Design Methodologies", "C-", 4),
#            ("Data Structures II", "B-", 3),
#            ("Hikma I", "C", 4),
#            ("Computer Architecture", "B", 3),
#            ("Calculus II", "C", 3),
#            ("Computer Architecture Lab", "C+", 1),
#            ("Modern Physics", "F", 3),
#            ("Engineering Mathematics", "B", 3),
#            ("Intro to Probability and Stats", "C-", 3),
#            ("Nature of Computation", "C+", 3),
#            ("Mechanics & Thermodynamics", "B+", 4),
#            ("Intro to Nanotechnology", "B-", 3),
#            ("Linear Algebra", "F", 3),
#            ("Computational Intelligence", "F", 3),
#            ("Software Engineering", "B", 3),
#            ("Algorithms Design & Analysis", "C-", 3),
#         #    ("Introduction to Western Philosophy", "None", 3)
#            ]



# grades and the list of courses I should have to get a 3.8 CGPA at the end
fantasy_courses_realistic = [("Engineering Workshop", "A-", 1),
                   ("Discrete Mathematics", "A+", 3),
                   ("What is Modernity?", "B-", 4),
                   ("Understanding the Human Body", "B", 3),
                   ("Digital Logic and Design Lab", "B-", 1),
                   ("Digital Login and Design", "A+", 3),
                   ("Electric Circutis", "A+", 2),
                   ("Intro to ECE", "B-", 2),
                   ("Data Structures & Algo", "B", 4),
                   ("Pakistan and Modern South Asia", "B+", 4),
                   ("Jehan-e-Urdu", "A", 4),
                   ("OOP & Design Methodologies", "A+", 4),
                   ("Data Structures II", "B-", 3),
                   ("Hikma I", "C", 4),
                   ("Computer Architecture", "B", 3),
                   ("Calculus II", "B+", 3),
                   ("Computer Architecture Lab", "C+", 1),
                   ("Modern Physics", "B+", 3),
                   ("Engineering Mathematics", "B", 3),
                   ("Intro to Probability and Stats", "A+", 3),
                   ("Nature of Computation", "C+", 3),
                   ("Mechanics & Thermodynamics", "B+", 4),
                   ("Intro to Nanotechnology", "B-", 3),
                   ("Software Engineering", "B", 3),
                   ("Introduction to Western Philosophy", "B+", 3),
                   ("Kaavish I", "A+", 3),
                   ("Electromagnetic Theory", "B+", 3),
                   ("Operating Systems", "B+", 4),
                   ("Natural Language Processing", "B+", 3),
                   ("Concepts of Modern Physics", "A+", 3),
                   ("Design & Social Change", "A+", 2),
                   ("Kaavish II", "A-", 3),
                   ("Linear Algebra", "B+", 3),
                   ("Computational Intelligence", "B+", 3),
                   ("Algorithms Design & Analysis", "B+", 3),
                   ("Quantum Mechanics", "B+", 3),
                   ("Quantum Computing", "B+", 3),
                   ("Introduction to Reinforcement Learning / Data Science", "B+", 3),
                   ("Database Systems", "B+", 4),
                   ("Data Communication & Networking", "B+", 4),
                   ("Philosophy", "A-", 3),
                   ("Tech Entrepreneurship", "A+", 3),
                   ("Scientific Methods", "A-", 3),
                   ("GPU Accelerated Computing", "B+", 3),
                   ("Introduction to Robotics", "B+", 4),
                   ("Advanced Physics Lab", "A+", 1),
                   ]

fantasy_courses_best = [("Engineering Workshop", "A-", 1),
                   ("Discrete Mathematics", "A+", 3),
                   ("What is Modernity?", "B-", 4),
                   ("Understanding the Human Body", "B", 3),
                   ("Digital Logic and Design Lab", "B-", 1),
                   ("Digital Login and Design", "A+", 3),
                   ("Electric Circutis", "A+", 2),
                   ("Intro to ECE", "B-", 2),
                   ("Data Structures & Algo", "B", 4),
                   ("Pakistan and Modern South Asia", "B+", 4),
                   ("Jehan-e-Urdu", "A", 4),
                   ("OOP & Design Methodologies", "A+", 4),
                   ("Data Structures II", "B-", 3),
                   ("Hikma I", "C", 4),
                   ("Computer Architecture", "B", 3),
                   ("Calculus II", "B+", 3),
                   ("Computer Architecture Lab", "C+", 1),
                   ("Modern Physics", "A+", 3),
                   ("Engineering Mathematics", "B", 3),
                   ("Intro to Probability and Stats", "A+", 3),
                   ("Nature of Computation", "C+", 3),
                   ("Mechanics & Thermodynamics", "B+", 4),
                   ("Intro to Nanotechnology", "B-", 3),
                   ("Software Engineering", "B", 3),
                   ("Introduction to Western Philosophy", "B+", 3),
                   ("Kaavish I", "A+", 3),
                   ("Electromagnetic Theory", "B+", 3),
                   ("Operating Systems", "A-", 4),
                   ("Natural Language Processing", "A-", 3),
                   ("Concepts of Modern Physics", "A+", 3),
                   ("Design & Social Change", "A+", 2),
                   ("Kaavish II", "A+", 3),
                   ("Linear Algebra", "A-", 3),
                   ("Computational Intelligence", "A-", 3),
                   ("Algorithms Design & Analysis", "A+", 3),
                   ("Understanding the Human Body Lab", "A", 1),
                   ("Quantum Mechanics", "A-", 3),
                   ("Quantum Computing", "A+", 3),
                   ("Introduction to Reinforcement Learning / Data Science", "A-", 3),
                   ("Database Systems", "A+", 4),
                   ("Data Communication & Networking", "B+", 4),
                   ("Philosophy", "A-", 3),
                   ("Tech Entrepreneurship", "A+", 3),
                   ("Scientific Methods", "A+", 3),
                   ("GPU Accelerated Computing", "A-", 3),
                   ("Introduction to Robotics", "A-", 4),
                   ("Advanced Physics Lab", "A+", 1),
                   ]

# courses that I have to repeat no matter what 
main_courses = ["Discrete Mathematics", "Scientific Methods", 
                "Philosophy Requirement", "Management Requirement", 
                "Algorithms Design & Analysis", "Object Oriented Programming", 
                "Linear Algebra", "Computational Intelligence"]


# list of courses I can/have to repeat to get a 3.8 CGPA, assumed grade is A
to_repeat = ["Algorithms Design & Analysis",
             "Computational Intelligence", "Linear Algebra", "Nature of Computation", "Intro to Probability and Stats", "Modern Physics", "Calculus II", "Hikma I", "OOP Design & Methodologies", "Digital Logic and Design", "Electric Circuits"]
# list of courses I have to take to complete my ECE specialization
ece_courses = ["Mobile Robotics", "Intro to Robotics",
               "Computer Vision", "Data Communication & Networking", "Aerial Robotics"]
# courses I have to do to complete my Physics Minor 
physics_courses = ["Quantum Computing", "Modern Physics", "Electromagnetic Theory", "Quantum Mechanics", "Advanced Physics Lab", ]
# list of courses that I can take maybe but not recommended
maybe_courses = ["Computer Graphics", "Electric Vehicles"]
# list of courses that I have to take to complete my ML/AI specialization, 4-5 courses
ai_courses = ["Introduction to Deep Learning", "Introduction to Machine Learning",
              "Computational Intelligence", "Natural Language Processing", "Probabilistic Graph Models", "Data Science", "Introduction to Reinforcement Learning"]

gpa_calculator = GPACalculator(courses)
cgpa = gpa_calculator.calculate_cgpa()
print(f"CGPA: {cgpa:.2f}")
