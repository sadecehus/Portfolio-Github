namespace SMS.Models;

public class Classroom
{
    public int Id { get; set; }
    public int Grade { get; set; }
    public string Section { get; set; }
    public ICollection<Student> Students { get; set; }
    public ICollection<Course> Courses { get; set; }
}