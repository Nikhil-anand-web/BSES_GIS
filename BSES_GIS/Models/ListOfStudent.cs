using System.ComponentModel.DataAnnotations;

namespace BSES_GIS.Models
{
    public class ListOfStudent
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int std { get; set; }
    }
}
