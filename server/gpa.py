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
    