from django.db import models

class ListaCuradoria(models.Model):
    nome = models.CharField(max_length=255)
    descricao = models.TextField(blank=True, null=True)
    usuario = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE, related_name='listas')
    publica = models.BooleanField(default=True)
    criado_em = models.DateTimeField(auto_now_add=True)
    atualizado_em = models.DateTimeField(auto_now=True)

class ListaPerfume(models.Model):
    lista = models.ForeignKey(ListaCuradoria, on_delete=models.CASCADE, related_name='perfumes')
    perfume = models.ForeignKey('perfumes.Perfume', on_delete=models.CASCADE)
    ordem = models.IntegerField(default=0)
