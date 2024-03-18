#include <stdio.h>
#include <string.h>
#include <stdlib.h>

union Extra_Info
{
	int bday[10][10];
	char ophone[20][10];
};

struct entries
{
	char first_name[10][20];
	char last_name[10][20];
	char phone_number[10][20];
	union Extra_Info info;
	int flag;
};

struct entries s3[10];
NODE *head = s3;

//function to check first and last name
int checkduplicate (char fn[], char ln[])
{
	if ((strlen(fn) > 10) || (strlen(ln) > 10))
        {       
                return 0;
        }
        int i;
        for(i=0; i < counter; i++)
        { 
          if(strcmp(fn, s3.first_name[i]) == 0 && strcmp(ln, s3.last_name[i]) == 0)
                {       
                        return 1;
                }
        }
        return 0;
}

//insert func
void insert()
{
	if(head == 10)
	{
		printf("Entries are full\n");
		return;
	}
       	char name[20];
       	char lname[20];
       	char num[20];
       	printf("Enter first name: ");
       	scanf("%s", name);

      	printf("Enter last name: ");
       	scanf("%s", lname);

       	printf("Enter phone number: ");
       	scanf("%s", num);

       	if(checkduplicate(name, lname) != 0)
      	{	
              	printf("This name already exists in our database.\n");
       	}
       	else
       	{
               	printf("Enter extra info? Enter 0 for birthday, 1 for phone number and 2 for extra info. \n");
               	int tempflag;
               	scanf("%d", &tempflag);
		char birthday[10];
		char phonenum[10];

                if (tempflag == 2)
                {
			printf("No extra info.\n");

                }
                else if (tempflag == 0)
                {

                        printf("Enter your birthday in this notation: Month/Day \n");
                        scanf("%s", &birthday);
                }
                else if (tempflag == 1)
                {
                        printf("Enter another phone number:\n");
                        scanf("%s", phonenum);
                       
                }
                int i;
                for (i=0; i<counter; i++)
                {
                        int nameComp = strcmp(s3[i].last_name, lname);
                        if(nameComp > 0 || (nameComp == 0 && strcmp(s3.first_name, name) > 0))
                        {
                                break;
                        }
		}
		int j;
                for(j = counter; j > i; j--)
                {
                        s3[j] = s3[j-1];
		}
                strcpy(s3[i].first_name, name);
                strcpy(s3[i].last_name, lname);
                strcpy(s3[i].phone_number, num);
		s3[i].flag = tempflag;

		if(s3[i].flag == 0)
		{
			sscanf(birthday, "%d/%d", &s3[i].info.bday[0], &s3[i].info.bday[1]);
		}
		else if (s3[i].flag == 1)
		{
			strcpy(s3[i].info.ophone, phonenum);
		}
		printf("Flag is %d\n", s3[i].flag);
               // counter++;
        }
}

//show all func
void show_all()
{
//	struct entries *p;
	if (head == NULL)
	{
		printf("The phonebook is empty.\n");
	}
	else
	{
		while (head != NULL)
		{
			printf("Phonebook list:\n");
			int i;
			for (i=0; i< counter; i++)
			{
			

