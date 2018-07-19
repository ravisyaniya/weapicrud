namespace Webapicrud.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class due : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        isbn = c.String(),
                        title = c.String(),
                        author = c.String(),
                        description = c.String(),
                        published_year = c.String(),
                        publisher = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Employees");
        }
    }
}
