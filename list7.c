#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "lab7.h"


void read_from_file()
{
	FILE *fp;
	fp = fopen("output.txt", "r");

	if(fp == NULL)
	{
		return;
	}
	while (1)
	{
		NODE *read = (NODE *)malloc(sizeof(NODE));
		if(fscanf(fp, "%s %s %s\t%d", read->first_name, read->last_name, read->phone_number, &read->flag) != 4)
		{
			free(read);
			break;
		}
			if(read->flag == 0)
			{
				fscanf(fp, " %d/%d", &read->info.bday[0], &read->info.bday[1]);
			}
			else if(read->flag == 1)
			{
				fscanf(fp, " %s", read->info.ophone);
			}
			else if (read->flag == 2)
			{
				break;
			}
		read->next = NULL;
		insert(read);
	}
	fclose(fp);
	return;
}

void save_to_file()
{
	FILE *fp = fopen("output.txt", "w");
	if (fp == NULL)
	{
		return;
	}
	int i;
	NODE *current = head;
	while(current!= NULL)
	{

		//fprintf(fp,"Entry:%d\n", i);
	 
		fprintf(fp, "%s %s %s\t%d", current->first_name, current->last_name, current->phone_number, current->flag);
		if(current->flag == 0)
		{
			fprintf(fp, " %d/%d", current->info.bday[0], current->info.bday[1]);
		}
		else if(current->flag == 1)
		{
			fprintf(fp, " %s", current->info.ophone);
		}
		fprintf(fp, "\n");
		current = current->next;
	}
	fclose(fp);
}

void delete_all()
{
	NODE *current = head;
	NODE *next;
	if (current == NULL)
	{
		printf("current is NULL\n");
		return;
	}
	while (current!= NULL)
	{
		next = current->next;
		free(current);
		current = next;
	}
	head = NULL;
}

int checkduplicate (char *first_name, char *last_name)
{
        if(first_name == NULL || last_name == NULL)
        {
                printf("first or last name is NULL.\n");
                return 0;
        }

        NODE *current = head;
        while (current!= NULL)
        {
                if(strcmp(current->first_name, first_name) == 0 && strcmp(current->last_name, last_name) == 0)
                {
                        return 1;
                }
        current = current->next;
        }
        return 0;
}
void read_from_keyboard()
{
	NODE *newNode = (NODE *)malloc(sizeof(NODE));
        if (newNode == NULL)
        {
                printf("Memory allocation failed\n");
                return;
        }
        newNode->next = NULL;

        printf("Enter first name: ");
        scanf("%s", newNode->first_name);

        printf("Enter last name: ");
        scanf("%s", newNode->last_name);

        printf("Enter phone number: ");
        scanf("%s", newNode->phone_number);

        if(checkduplicate(newNode->first_name, newNode->last_name) != 0)
        {
                printf("This name already exists in our database.\n");
                free(newNode);
                return;
        }
                 printf("Enter extra info? Enter 0 for birthday, 1 for phone number and 2 for extra info. \n");
                int tempflag;
                scanf("%d", &tempflag);

                if (tempflag == 2)
                {
                        newNode->flag = 2;
                        printf("No extra info.\n");

                }
                else if (tempflag == 1)
                {
                        printf("Enter another phone number:\n");
                        scanf("%s", &newNode->info.ophone);
                        newNode->flag = 1;
                }
                else if (tempflag == 0)
                {
                        printf("Enter your birthday in this notation: Month/Day.\n");
                        scanf("%d/%d", &newNode->info.bday[0], &newNode->info.bday[1]);
                        printf("%d/%d\n",newNode->info.bday[0], newNode->info.bday[1]);
                        newNode->flag = 0;
                }

                newNode->next = NULL;
		insert(newNode);
}
void insert(NODE *newNode)
{
                NODE *current = head;
                NODE *prev = NULL;

                while(current!= NULL)
                {
                        int nameComp = strcmp(current->last_name, newNode->last_name);
                        if(nameComp > 0 || (nameComp == 0 && strcmp(current->first_name, newNode->first_name) > 0 ))
                        {
                                printf("this works\n");
                                break;
                        }
                        prev = current;
                        current = current->next;
                }
                if (prev == NULL)
                {
                        printf("prev is null\n");
                        newNode->next = head;
                        head = newNode;
                }
                else
                {
                        prev->next = newNode;
			newNode->next = current;
                        printf("prev is not null\n");
                }
}

void show_all()
{
        NODE *current = head;
        if (current == NULL)
        {
                printf("The phonebook is empty.\n");
        }
        else
        {
                printf("Phonebook list:\n");

                while(current != NULL)
                {
                        printf("Last and first name: %s, %s Phone number: %s\n", current->last_name, current->first_name, current->phone_number);
                        if (current->flag == 0)
                        {
                                printf("Birthday: %d/%d\n", current->info.bday[0], current->info.bday[1]);
                        }
                        else if (current->flag == 1)
                        {
                                printf("Other phone number: %s\n", current->info.ophone);
                        }
                        else if (current->flag == 2)
                        {
                                printf("No extra info\n");
                        }
                        current = current->next;
                }
        }
}
void show_names()
{
        NODE *current = head;
        char newNode[20];
        printf("Enter your last name associated with your entry.\n");
        scanf("%s", newNode);

        if (current == NULL)
        {
                printf("Phonebook is empty.\n");
                return;
        }
        while (current != NULL)
        {
                if(strcmp(current->last_name, newNode) == 0)
                {
                        printf("Entry %s %s exists under the phone number: %s\n", current->first_name, current->last_name, current->phone_number);
               
                }
                current = current->next;
        }
        printf("There are no entries under %s.\n", newNode);
}

int delete_entry()
{
        NODE *current = head;
        NODE *prev = NULL;
        char name[20];
        char lname[20];

        printf("Enter the first name of the entry you wish to delete.\n");
        scanf("%s", name);

        printf("Enter the last name of the entry you wish to delete.\n");
        scanf("%s", lname);

        if (current == NULL)
        {
                printf("Phonebook is empty.\n");
                return 0;
        }

        while (current != NULL)
        {
                if(strcmp(current->first_name, name) == 0 && strcmp(current->last_name, lname) == 0)
                {
                        printf("Entry found!\n");
                        if(prev == NULL)
                        {
                                head = current->next;
                        }
                        else
                        {
                                prev->next = current->next;
                        }

                        free(current);
                        printf("Entry deleted.\n");
                        return 1;
                }
		 prev = current;
                current = current->next;
        }
        printf("There are no entries under %s %s.\n", name, lname);
        return 0;
}

int delete_names()
{
        NODE *current = head;
        NODE *prev = NULL;
        char name[20];
        int flag;

        if(current == NULL)
        {
                printf("Phonebook is empty.\n");
                return 0;
        }

        printf("Enter the last name of the entry you wish to delete.\n");
        scanf("%s", name);

        while(current != NULL)
        {
                if(strcmp(current->last_name, name) == 0)
                {
                        printf("Entry found!\n");
                        if(prev == NULL)
                        {
                                head = current->next;
                        }
                        else
                        {
                                prev->next = current->next;
                        }

                        NODE *temp = current;
                        current = current->next;
                        free(temp);
                        flag = 1;

                }
                else
                {
                        prev = current;
                        current = current->next;
                }
        }
        if (flag != 1)
        {
                printf("There are no entries under %s.\n", name);
                return 0;
        }
}
