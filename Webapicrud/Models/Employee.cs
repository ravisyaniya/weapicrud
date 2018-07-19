using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Webapicrud.Models
{
    public class Employee
    {

        [Key]
        public int isbn { get; set; }
        public string title { get; set; }

        public string author { get; set; }

        public string description { get; set; }

        public string published_year { get; set; }

        public string publisher { get; set; }


    }
}