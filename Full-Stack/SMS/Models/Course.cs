namespace SMS.Models;

public class Course
{
        public int Id { get; set; }

        public string Name { get; set; } // Matematik, Türkçe

        public int ClassId { get; set; }
        public Classroom Class { get; set; }

        // Navigation
        public ICollection<TeacherCourse> TeacherCourses { get; set; }
        public ICollection<Grade> Grades { get; set; }
}