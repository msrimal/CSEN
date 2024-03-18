#ifndef LAB6_H
#define LAB6_H
union Extra_Info
{
        int bday[2];
        char ophone[20];
};

typedef struct Node
{
        char first_name[20];
        char last_name[20];
        char phone_number[12];
        union Extra_Info info;
        int flag;
        struct Node *next;
}NODE;

extern NODE *head;

int checkduplicate(char *first_name, char *last_name);
void insert();
void show_all();
void show_names();
int delete();
int delete_names();
#endif 
