using System;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace VueCLICore.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("/")]
        public IActionResult Index()
        {
            Debug.WriteLine("Home::Index");
            return View();
        }
    }
}

