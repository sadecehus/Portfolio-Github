namespace SMS.Models;

public class Student
{
    public int Id { get; set; }
    public string UserId { get; set; }
    public ApplicationUser User { get; set; }
    public int ClassId { get; set; }
    public Classroom Classroom { get; set; }
    
    public ICollection<Grade> Grades { get; set; }
}
