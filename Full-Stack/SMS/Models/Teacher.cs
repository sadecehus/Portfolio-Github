namespace SMS.Models;

public class Teacher
{
    public int Id { get; set; }

    public string UserId { get; set; }
    public ApplicationUser User { get; set; }

    // Navigation
    public ICollection<TeacherCourse> TeacherCourses { get; set; }

}