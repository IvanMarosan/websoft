using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.CompilerServices;
using webapp.Services;
using webbapp.Models;

namespace webapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountsController : ControllerBase
    {
        public AccountsController(JsonFileAccountService accountService)
        {
            AccountService = accountService;
        }

        public JsonFileAccountService AccountService { get; }

        [HttpGet]
        public IEnumerable<Account> Get()
        {
            return AccountService.GetAccounts();
        }
        
        [HttpGet("{number}")]
        public IEnumerable<object> Get(int number)
        {
            var findAccount =
                AccountService
                    .GetAccounts()
                    .Where(account => account.Number == number)
                    .ToArray();
            return findAccount.Any() ? (IEnumerable<object>) findAccount : new[] {"No data"};

        }

    }
}