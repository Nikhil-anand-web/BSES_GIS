using BSES_GIS.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Diagnostics;

namespace BSES_GIS.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var ui = new Examplee
            {
                Uris = new Uri("https://services8.arcgis.com/IW7AK9LChQOefsBo/arcgis/rest/services/trailheads/FeatureServer/0")
            };

            return View(ui);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}