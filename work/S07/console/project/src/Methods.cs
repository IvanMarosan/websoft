using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace project
{
    public class Methods
    {
        public static IEnumerable<Menu.Account> ReadAccounts()
        {
            String file = "../../../data/account.json";
           
            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();
                // Console.WriteLine(data);

                var json = JsonSerializer.Deserialize<Menu.Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );

                //Console.WriteLine(json[0]);
                return json;
            }
        }

        public static void PrintAccount(IEnumerable<Menu.Account> accounts) {
            var accountList = accounts.ToList();
            if (!accountList.Any())
            {
                Console.WriteLine("There is no such account");
                return;
            }

            const string lineBreak = "+--------+---------+-----------+-------+";
            Console.WriteLine(lineBreak);
            Console.WriteLine("| Number | Balance |   Label   | Owner |");
            Console.WriteLine(lineBreak);
            foreach (var account in accountList)
            {
                Console.WriteLine($"|{account.Number,8}|{account.Balance,9}|{account.Label,11}|{account.Owner,7}|");
                Console.WriteLine(lineBreak);
            }
                        
        }
    }
}
