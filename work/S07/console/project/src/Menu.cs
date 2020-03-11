using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace project
{
    public class Menu
    {

        static void Main(string[] args)
        {
            
            while (true)
            {
                Console.WriteLine("Choose an option:");
                Console.WriteLine("1) View Accounts");
                Console.WriteLine("2) View by ID");
                Console.WriteLine("3) Exit");
                Console.Write("\r\nSelect an option: ");
                var selection = Console.ReadLine();

                switch (selection)
                {
                    case "1":
                        var accounts = Methods.ReadAccounts();
                        Methods.PrintAccount(accounts);
                        break;
                    case "2":
                        var accountByID = Methods.ReadAccounts();
                        Console.WriteLine("Enter the account you want to read");
                        var option = Console.ReadLine();
                        var id = int.Parse(option ?? "-1");
                        var exists = accountByID.FirstOrDefault(account => account.Number == id);
                        if (exists == null) 
                        {
                            Console.WriteLine("This account does not exists");
                            break;
                        }
                        Methods.PrintAccount(new []{exists});
                        break;
                    case "3":
                        Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine("Please enter a legit number!");
                        break;
                }
            }

        }

        public class Account
        {
            public int Number { get; set; }
            public int Balance { get; set; }
            public string Label { get; set; }
            public int Owner { get; set; }

            public override string ToString()
            {
                return JsonSerializer.Serialize<Account>(this);
            }
        }
    }
}
