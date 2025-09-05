from django.db import models

class DupePesquisa(models.Model):
    usuario = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)
    perfume = models.ForeignKey('perfumes.Perfume', on_delete=models.CASCADE)
    similaridade = models.FloatField(blank=True, null=True)