using System;
namespace App
{
    class App
    {
        static void Main(string[] args)
        {
            Goal1();
            Goal2();
            Goal3();

            goalRevision();
        }
        private static void Goal1()
        {
            Console.WriteLine("Welcome to Goal Setter!");
            Console.WriteLine("\nTell me your top 3 goals: ");

            Console.Write("#1. ");
            Console.ReadLine();            
        }
        private static void Goal2()
        {
            Console.Write("#2. ");
            Console.ReadLine();            
        }
        private static void Goal3()
        {
            Console.Write("#3. ");
            Console.ReadLine();

            Console.WriteLine("\nSince it's best to reach one goal at a time, " +
                "which goal are you most commited to reaching now?");
            string topGoal = Console.ReadLine();
            Console.WriteLine($"\nRewrite \"{topGoal}\" in the form of a specific behavior that is process-oriented.");            
        }
        private static void goalRevision()
        {
            Console.WriteLine($"\nHow can you rewrite your goal so that it feels more appealing?");
            Console.ReadLine();

            Console.WriteLine($"\nWhat details make your goal more specific that you may have left out?");
            Console.ReadLine();

            Console.WriteLine($"\nWhat is a process you could follow to reach your goal?");
            Console.ReadLine();

            Console.WriteLine("\nWrite your revised goal as a statement here: ");
            string rGoal = Console.ReadLine();

            Console.WriteLine($"\nYou've reached the end of Goal Setter. Use your revised statement as a tool to accomplish your life changing goals.");
        }
    }
}