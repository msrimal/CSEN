/* C program to demonstrate the use of fork()*/
#include <stdio.h> /* printf, stderr */
#include <sys/types.h> /* pid_t */
#include <unistd.h> /* fork */
#include <stdlib.h> /* atoi */
#include <sys/wait.h> 
#include <errno.h> /* errno */
/* main function */
//Maya Srimal
//04/09/25
//Lab 2 - Part 6
//Description: create 5 processes
int main(int argc, char *argv[]) {
	if(argc != 6){
		printf("Usage: %s<delay>\n",argv[0]);
		exit(0);
	}
	pid_t pid[4];
	int i;
	int delays[5];
	//different delays
	for(i = 0; i < 5; i++){
		delays[i] = atoi(argv[i+1]); // n is a delay in microseconds inserted in parent and child iterations
	}
	printf("\n Before forking.\n");

	for(i = 0; i < 4; i++){
		pid[i] = fork();
		if( pid[i] < 0){
			fprintf(stderr, "can't fork, error %d\n", errno);
	                exit(0);
		}
		else if (pid[i] == 0){
			printf("I am a child process displaying iteration %d\n", i);
			int j;
			for(j = 0; j<10; j++){
				printf("Child: %d iteration %d\n", i + 1, j);
				usleep(delays[i]);
			}
			exit(0);
		}
	}
		//wait for all to be done
		for(i=0; i<10; i++){
			waitpid(pid[i], NULL, 0);

		}

		//parent processes
		for(i=0; i<10; i++){
			printf("I am a parent process displaying iteration %d\n", i);
		}
		return 0;
}
