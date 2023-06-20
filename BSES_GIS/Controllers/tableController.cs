using BSES_GIS.Models;
using Microsoft.AspNetCore.Mvc;

namespace BSES_GIS.Controllers
{
    public class tableController : Controller
    {
        List<ListOfStudent> listOfStudents = new List<ListOfStudent>
        {

            new ListOfStudent{Id=1,Name="nikhil",std=123},
            new ListOfStudent{Id=2 ,Name="Himanshu",std=123},
            new ListOfStudent{Id=3,Name="anuj",std=123},
            new ListOfStudent{Id=4,Name="sashank",std=123}
        };
        
        public IActionResult Index()
        {

            
            return View(listOfStudents);
        }
    }
}
