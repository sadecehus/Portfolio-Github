using System.Collections;

internal class Program
{
    static void Main(string[] args)
    {
        #region ArrayList
            ArrayList arlist = new ArrayList();
            arlist.Add(1);
            arlist.Add(new int[] { 1, 2, 3 });
        

            foreach (var i in arlist)
            {
                if (i.GetType() == typeof(int[]))
                {
                    foreach (var j in (int[])i)
                    {
                        Console.WriteLine(j);
                    }
                }
                else
                {
                    Console.WriteLine(i); 
                }

               
            }
            
        #endregion

        #region HashTable
            
        #endregion

        #region SortedList
            
        #endregion
        
        #region Queue
            
        #endregion

        #region Stack
            
        #endregion


    }
}