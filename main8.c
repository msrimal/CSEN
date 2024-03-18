#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "lab8.h"


NODE *head[3] = {NULL, NULL, NULL};

int main(int argc, char *argv[])
{       
	if (argc == 1)
	{
		printf("The name of the file is missing\n");
		return 1;
	}
        read_from_file(argv[1]);
        int option;

        for(;;)
        {
                printf("1 - Add entry\n");
                printf("2 - Show all entries\n");
                printf("3 - Show names\n");
                printf("4 - Delete entry\n");
                printf("5 - Delete entry by last name\n");
                printf("0 - Save and quit\n");
                scanf("%d", &option);

                switch(option)
                {
                        case 1:
                                read_from_keyboard();
                                break;
                        case 2:
                                show_all();
                                break;
                        case 3:
                                show_names();
                                break;
                        case 4:
                                delete_entry();
                                break;
                        case 5:
                                delete_names();
                                break;
                        case 0:
                                save_to_file(argv[1]);
                                delete_all();
                                printf("Program Quit.\n");
                                return 0;
                }
	}
	return 0;
}
