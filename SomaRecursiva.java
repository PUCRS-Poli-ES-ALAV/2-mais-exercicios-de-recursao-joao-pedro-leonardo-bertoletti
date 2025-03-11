import java.util.ArrayList;

public class SomaRecursiva {
    public static int somatorio(ArrayList<Integer> numeros, int index) {
        if (index < 0) {
            return 0;
        }
        return numeros.get(index) + somatorio(numeros, index - 1);
    }

    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>();
        numeros.add(1);
        numeros.add(2);
        numeros.add(3);
        numeros.add(4);
        numeros.add(5);
        
        int soma = somatorio(numeros, numeros.size() - 1);
        System.out.println("Somatório: " + soma);
    }
}
