namespace Webapicrud.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class app : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        isbn = c.Int(nullable: false, identity: true),
                        title = c.String(),
                        author = c.String(),
                        description = c.String(),
                        published_year = c.String(),
                        publisher = c.String(),
                    })
                .PrimaryKey(t => t.isbn);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Employees");
        }
    }
}
