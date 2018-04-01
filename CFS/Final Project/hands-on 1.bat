prompt $m$$$g
cls

        color 1c
        @echo !- - - - - - - - - - - 
        @echo making a drirectory named fast
        color 0f
ping 127.0.0.1 -n 3 > nul
mkdir fast
dir
pause 
        color 1c
        @echo !- - - - - - - - - - - 
        @echo switching to fast
color 0f

ping 127.0.0.1 -n 3 > nul 
cd fast
dir
pause 
        color 1c
        @echo !- - - - - - - - - - - 
        @echo create furious
 
ping 127.0.0.1 -n 3 > nul
mkdir furious
dir
pause 

        color 1c
        @echo !- - - - - - - - - - - 
        @echo moving to furious 
ping 127.0.0.1 -n 3 > nul
cd furious
dir 
pause 
        color 1c
        @echo !- - - - - - - - - - -  
        @echo make a file your_file.txt

type nul > your_file.txt
dir /w /s > list.txt
dir /w
pause 
        color 1c
        @echo !- - - - - - - - - - -  
        @echo move back to fast

cd..
dir
pause 
        @echo - - - - - - - - - - - 
        @echo rename furious to joyride

ren furious joyride
dir
pause
        @echo - - - - - - - - - - - 
        @echo all done
pause 
prompt
