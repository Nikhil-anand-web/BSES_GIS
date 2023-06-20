using Microsoft.AspNetCore.Mvc;

namespace BSES_GIS.Controllers
{
    public class mapinterfaceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
