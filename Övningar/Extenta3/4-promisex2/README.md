# Uppgift 4

I `script.js` ligger det en funktion: `getData` som returnerar en promise med data.

Du ska göra tre saker:

1. Skapa en funktion `wait` som tar ett argument. Funktionen ska returnera en promise som resolvar med argumentet efter 1 sekund.
2. Skriv kod som anropar funktionen `getData` och skickar in datan in i `wait` funktionen. När du får tillbaka datan från `wait` ska du rendera datan som en tabell i `main` elementet. (Det är samma data som i förra övningen, så du får lov att kopiera över den funktionen som gör renderingen).
3. I HTML:en ligger det ett p element med texten "loading...". Denna texten ska först visas när vi gör anropet till getData, och därefter gömmas när vi har fått datan tillbaka från wait funktionen. Men du får inte ta bort elementet från DOM:en.
